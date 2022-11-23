import React, { useState } from 'react'
import styled from 'styled-components'
import DateSelect from './DateSelect'
import DateView from './DateView'
import '../css/History.css'

const History = ({ historyObj, trace }) => {
  console.log(historyObj)
  const onChangeTitleText = (e) => {
    setEditTitle(e.target.value)
    // user.photos[idx].title = editTitle
  }
  // const image = user.photos[idx].img
  const [editTitle, setEditTitle] = useState('')
  if (trace === 'View') {
    return (
      <div>
        <section id="title">
          <h5 style={{ marginTop: '5px' }}>{historyObj.history.title}</h5>
          <Info>
            {/* 이미지 크기 조정필요해보임 */}
            <img src={historyObj.files[0].url}></img>
            <DateView />
          </Info>
        </section>
      </div>
    )
  }

  // 주석처리해놨음 => 수정해주셈

  // else {
  //   trace === "edit"
  //   return (
  //     <div>
  //       <section id="title">
  //         {editTitle ? (
  //           <input value={editTitle} onChange={onChangeTitleText} />
  //         ) : (
  //           <input
  //             defaultValue={user.photos[idx].title}
  //             onChange={onChangeTitleText}
  //           />
  //         )}
  //         <Info>
  //           {user.photos[idx].location} <DateSelect />
  //         </Info>
  //       </section>
  //     </div>
  //   )
  // }
}

export default History

const Info = styled.div`
  width: 320px;
  height: 50px;
  display: flex;
  justify-content: space-between;
`
