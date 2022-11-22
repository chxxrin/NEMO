import React from "react";
import Member from "./Member";
import "../css/MemberModal.css";

const MemberModal = (props) => {
  // 열기, 닫기, 모달 헤더 텍스트를 부모로부터 받아옴
  const { open, close, header, save, invite } = props;

  return (
    // 모달이 열릴때 openModal 클래스가 생성된다.
    <div className={open ? "openModal memModal" : "memModal"}>
      {open ? (
        <section>
          <header>
            {header}
            <button className="close" onClick={close}>
              &times;
            </button>
          </header>
          <main>
            {<Member name="시원" />}
            {<Member name="지우" />}
          </main>
          <footer>
            <div className="buttons">
              <button className="invite" onClick={invite}>
                초대
              </button>
              <button className="save" onClick={close}>
                완료
              </button>
            </div>
          </footer>
        </section>
      ) : null}
    </div>
  );
};

export default MemberModal;
