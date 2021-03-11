import {useEffect, useState} from 'react'

export const useNow = () => {
  const [now, setNow] = useState<Date>(new Date())

  useEffect(() => {
    fetch('/api/date')
      .then(async (dateResponse) => {
        const dateJson = await dateResponse.json()

        if (!dateJson.now) {
          throw new Error('Invalid api response')
        }

        const newNow = new Date(dateJson.now)

        if (newNow instanceof Date && !isNaN(newNow.getTime())) {
          setNow(newNow)
        }
      })
      .catch((error) => {
        console.log('error getting date', error)
      })
  }, [])

  return {now}
}
