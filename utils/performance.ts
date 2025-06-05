import { useUIStore } from '~/stores/ui'

export const usePerformance = () => {
  const uiStore = useUIStore()

  // Track page load performance
  const trackPageLoad = () => {
    if (typeof window === 'undefined') return

    window.addEventListener('load', () => {
      const timing = window.performance.timing
      const pageLoadTime = timing.loadEventEnd - timing.navigationStart
      
      // Log performance metrics
      console.log('Performance Metrics:', {
        pageLoadTime: `${pageLoadTime}ms`,
        domContentLoaded: `${timing.domContentLoadedEventEnd - timing.navigationStart}ms`,
        firstPaint: performance.getEntriesByType('paint').find(entry => entry.name === 'first-paint')?.startTime,
        firstContentfulPaint: performance.getEntriesByType('paint').find(entry => entry.name === 'first-contentful-paint')?.startTime
      })

      // Send to analytics if needed
      if (pageLoadTime > 3000) {
        uiStore.addNotification({
          type: 'warning',
          message: 'Page load time is slow. Consider optimizing assets.'
        })
      }
    })
  }

  // Track component render performance
  const trackComponentRender = (componentName: string) => {
    if (process.env.NODE_ENV === 'development') {
      const start = performance.now()
      return () => {
        const duration = performance.now() - start
        console.log(`${componentName} render time: ${duration.toFixed(2)}ms`)
      }
    }
    return () => {}
  }

  // Track API calls
  const trackApiCall = async (apiCall: Promise<any>, endpoint: string) => {
    const start = performance.now()
    try {
      const result = await apiCall
      const duration = performance.now() - start
      
      if (duration > 1000) {
        console.warn(`Slow API call to ${endpoint}: ${duration.toFixed(2)}ms`)
      }
      
      return result
    } catch (error) {
      console.error(`API call to ${endpoint} failed:`, error)
      throw error
    }
  }

  // Track resource loading
  const trackResourceLoading = () => {
    if (typeof window === 'undefined') return

    const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (entry.duration > 1000) {
          console.warn(`Slow resource load: ${entry.name} (${entry.duration.toFixed(2)}ms)`)
        }
      }
    })

    observer.observe({ entryTypes: ['resource'] })
  }

  return {
    trackPageLoad,
    trackComponentRender,
    trackApiCall,
    trackResourceLoading
  }
} 