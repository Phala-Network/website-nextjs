async function attempt<T>(
  promise: Promise<T>,
): Promise<[Error | undefined, T]> {
  let error: Error | undefined
  let result
  try {
    result = await promise
  } catch (e) {
    error = e as Error
  }
  return [error, result as T]
}

attempt.all = async <T>(promises: Promise<T>[]): Promise<[Error[], T[]]> => {
  const ret = await Promise.all(promises.map((promise) => attempt(promise)))
  const errors: Error[] = []
  const results: T[] = []
  ret.forEach(([error, result]) => {
    if (error) errors.push(error)
    results.push(result)
  })
  return [errors, results]
}

export default attempt
