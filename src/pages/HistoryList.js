import React, { useEffect, useState } from 'react'
import History from '../components/History'
import HistoryTop from '../components/HistoryTop'
import NavbarNone from '../components/NavbarNone'
import '../css/History.css'
import '../css/Navbar.css'
import axios from 'axios'

const HistoryList = () => {
  const [histories, setHistories] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const fetchHistories = async () => {
    try {
      setError(null)
      setHistories(null)
      setLoading(true)
      const response = await axios
        .get(
          'history/all',
          {
            headers: { 'Access-Control-Allow-Origin': '*' },
          },
          { withCredentials: true }
        )
        .then((res) => {
          console.log(res.data) // 데이터 잘 가공해주셈!!
          setHistories(res.data)
        })
    } catch (e) {
      setError(e)
      console.log(e)
    }
    setLoading(false)
  }

  useEffect(() => {
    fetchHistories()
  }, [])

  console.log('histories', histories)

  return (
    <div className="container">
      <NavbarNone />
      <HistoryTop />
      <History trace="View" idx={0} />
      <History trace="View" idx={1} />
    </div>
  )
}

export default HistoryList
