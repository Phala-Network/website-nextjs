export async function getGitHubStars(): Promise<number> {
  try {
    const response = await fetch(
      'https://api.github.com/repos/Dstack-TEE/dstack',
      {
        headers: {
          Accept: 'application/vnd.github.preview',
        },
        next: { revalidate: 3600 }, // Cache for 1 hour
      },
    )

    if (!response.ok) {
      console.error('Failed to fetch GitHub stars:', response.status)
      return 0
    }

    const data = await response.json()
    return data.watchers_count || 0
  } catch (error) {
    console.error('Error fetching GitHub stars:', error)
    return 0
  }
}
