import React from "react";
import KakaoLoginBtn from "./KakaoLoginNavBtn";
import "../css/KakaoModal.css";

const KakaoLoginModal = (props) => {
  const { open, close, header } = props;

  return (
    // 모달이 열릴때 openModal 클래스가 생성된다.
    <div className={open ? "openModal kakaoModal" : "kakaoModal"}>
      {open ? (
        <section>
          <header>
            {header}
            <button className="close" onClick={close}>
              &times;
            </button>
          </header>
          <main>
            <KakaoLoginBtn />
          </main>
        </section>
      ) : null}
    </div>
  );
};

export default KakaoLoginModal;
