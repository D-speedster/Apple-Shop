import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'


export default function index() {
  let router = useRouter('')
  useEffect(() => {
    router.push('/')

  })
  return (
    <div>
       
    </div>
  )
}
