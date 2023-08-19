"use client";

import { useState } from "react";
import { useSetRecoilState } from "recoil";
import { nicknameState } from "@/src/recoil/user.atoms";
import { PrimaryButton } from "@/src/components/Common/Button";
import { ButtonField } from "@/src/components/Common/Button/ButtonField";

export default function Nickname() {
  const [nickname, setNickname] = useState("");
  const setNicknameRecoil = useSetRecoilState(nicknameState);

  const handleNext = () => {
    setNicknameRecoil(nickname);
    window.location.replace("/member/onboarding/gender");
  };

  const canActiveNextButton = Boolean(!nickname);

  return (
    <div className="flex flex-col items-center">
      <h2>본인을 확인할 수 있는 닉네임을 입력해주세요</h2>
      <input type="text" value={nickname} onChange={e => setNickname(e.target.value)} />
      <ButtonField>
        <PrimaryButton
          color="default"
          size="small"
          disabled={canActiveNextButton}
          onClick={handleNext}
        >
          확인
        </PrimaryButton>
      </ButtonField>
    </div>
  );
}