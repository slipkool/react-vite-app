import React from 'react'
import { isRouteErrorResponse, useRouteError } from 'react-router-dom'

export default function ErrorPage(): React.JSX.Element {
  const error = useRouteError()
  console.error(error)

  if (isRouteErrorResponse(error)) {
    return (
      <div>
        <h1>Oops!</h1>
        <h2>{error.status}</h2>
        <p>{error.statusText}</p>
        {error.error?.message && <p>{error.error.message}</p>}
      </div>
    )
  } else {
    return <div>Oops</div>
  }
}
