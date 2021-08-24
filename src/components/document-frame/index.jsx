import React from 'react'

export default function DocumentFrame(props) {
  const { title, url } = props.data
  return <iframe title={title} src={url} frameBorder="0" width="100%" height="720" style={{ margin: "auto" }} className="rounded-xl bg-gray-200"></iframe>
}