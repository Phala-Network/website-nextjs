import * as R from 'ramda'

export async function POST(request: Request) {
  const { email, turnstile } = await request.json()
  const formId = process.env.AGENT_WARS_FORM_ID!
  const secret = process.env.CF_TURNSTILE_SECRET!
  const siteverify = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: `secret=${secret}&response=${turnstile}`
  }).then(resp => resp.json())
  console.log('siteverify', siteverify)
  if (!siteverify.success) {
    return new Response(JSON.stringify({ succeed: false, error: 'Invalid Turnstile.' }), {
      status: 400,
    })
  }

  const data = {
    fields: R.toPairs({ email }).map(([key, value]) => ({ name: key, value, objectTypeId: '0-1' })),
  }
  console.log('data', data)

  try {
    const resp = await fetch(`https://api.hsforms.com/submissions/v3/integration/submit/${formId}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data),
    });
    if (resp.status === 200) {
      const body = await resp.json();
      return new Response(JSON.stringify({ succeed: true, message: body.inlineMessage }), {
        status: 200,
      })
    }
    if (resp.status === 400) {
      // const body = await resp.json();
      return new Response(JSON.stringify({ succeed: false, error: 'Invalid Email Address.' }), {
        status: 400,
      })
    }
    console.error('Unexpected response:', resp);
    return new Response(JSON.stringify({ succeed: false, error: 'Unknown Error, please try again later.' }), {
      status: 500,
    })
  } catch (err) {
    console.error('Unexpected exception:', err);
    return new Response(JSON.stringify({ succeed: false, error: 'Unknown Error, please try again later.' }), {
      status: 500,
    })
  }
}
