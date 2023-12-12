import { useCallback, useState } from 'react'

export function useRequestState() {
  const [state, setState] = useState({
    loading: false,
    success: false,
    error: undefined,
    data: undefined,
  })

  const setLoading = useCallback(loading => {
    setState({
      loading,
      success: false,
      data: undefined,
      error: undefined,
    })
  }, [])

  const setData = useCallback(data => {
    setState({
      data,
      success: true,
      loading: false,
      error: undefined,
    })
  }, [])

  const setError = useCallback(error => {
    setState({
      data: undefined,
      loading: false,
      success: false,
      error,
    })
  }, [])

  return {
    state,
    setState,
    setLoading,
    setData,
    setError,
  }
}
