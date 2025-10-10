'use client'

import React from 'react'

interface Props {
  children: React.ReactNode
}

interface State {
  hasError: boolean
}

export class GlobeErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError() {
    return { hasError: true }
  }

  componentDidCatch(error: Error) {
    // Only log in development
    if (process.env.NODE_ENV === 'development') {
      // Suppress hydration errors from globe.gl
      if (
        error.message.includes('innerHTML') ||
        error.message.includes('Hydration')
      ) {
        console.warn('Suppressed globe.gl hydration error:', error.message)
        this.setState({ hasError: false })
        return
      }
    }
    console.error('Globe error:', error)
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="w-full h-full flex items-center justify-center bg-muted/20">
          <div className="text-muted-foreground">
            Failed to load globe visualization
          </div>
        </div>
      )
    }

    return this.props.children
  }
}
