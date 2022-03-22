import React, { useEffect } from 'react';

export default function Custom404() {

    useEffect(() =>{
        window.location.href='/';
    }, [])
    return <h1>404 - Page Not Found</h1>
  }