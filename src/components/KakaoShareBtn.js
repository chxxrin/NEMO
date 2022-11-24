import React from 'react'
import { useCallback } from 'react'
import { BsFillChatFill } from 'react-icons/bs'
import styled from 'styled-components'

const KAKAO_JS_KEY = process.env.REACT_APP_KAKAO_JS_KEY

let MOBILE_WEB_URL = ''

if (
  process.env.REACT_APP_ENV === 'development' ||
  process.env.REACT_APP_ENV === 'local'
) {
  // npm run dev ,npm start (로컬환경 테스트)
  MOBILE_WEB_URL = 'http://localhost:3000'
} else {
  // production
  // npm build (배포환경 테스트)
  MOBILE_WEB_URL = 'http://ne-mo.me'
}

function KakaoShareBtn({ hashed_history_id, historyObj }) {
  const onClickKakaoButton = useCallback(() => {
    if (!window.Kakao) {
      return
    }
    const kakaoSdk = window.Kakao

    if (!kakaoSdk.isInitialized()) {
      kakaoSdk.init(KAKAO_JS_KEY)
    }

    console.log(historyObj)

    kakaoSdk.Share.sendDefault({
      objectType: 'feed',
      content: {
        title: `네컷 모음집 [네모]`,
        description: `${historyObj.studio.company} ${historyObj.studio.name} 에서의 네컷사진을 같이 봐요! 📸`,
        imageUrl: 'http://ne-mo.me/nemo-logo-256.png',
        link: {
          mobileWebUrl: `${MOBILE_WEB_URL}/history/view/${hashed_history_id}`,
          webUrl: `${MOBILE_WEB_URL}/history/view/${hashed_history_id}`,
        },
      },
    })
  }, [window])
  return (
    <KakaoShareButton onClick={onClickKakaoButton}>
      <BsFillChatFill
        className="logo"
        style={{ color: '#191604', marginRight: '15px' }}
      />
      카카오톡 친구 초대
    </KakaoShareButton>
  )
}

export default KakaoShareBtn

// KakaoLoginBtn
const KakaoShareButton = styled.button`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 250px;
  margin: 20px auto;
  cursor: pointer;
  padding: 10px;
  background-color: #fee500;
  color: #181602;
  border: none;
  font-size: 16px;
  font-family: 'Spoqa Han Sans Neo', 'sans-serif';
  border-radius: 20px;
`
