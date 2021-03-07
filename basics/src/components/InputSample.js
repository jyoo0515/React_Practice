import React, {useRef, useState} from 'react';

function InputSample() {
    const [inputs, setInputs] = useState({
        name: '',
        nickName: ''
    });
    
    const nameInput = useRef();

    const {name, nickName} = inputs; // 비구조화 할당을 통해 값 추출

    const onChange = (e) => {
        const {value, name} = e.target; // e.target에서 name과 value 추출
        setInputs({
            ...inputs, // 기존의 input 객체를 복사한 뒤
            [name]: value // name 키를 가진 값을 value로 설정
        });
    };

    const onReset = () => {
        setInputs({
            name: '',
            nickName: ''
        });
        nameInput.current.focus();
    };

    return(
        <div>
            <input name="name" placeholder="Name" onChange={onChange} value={name} ref={nameInput}/>
            <input name="nickName" placeholder="Nickname" onChange={onChange} value={nickName}/>
            <button onClick={onReset}>Reset</button>
            <div>
                <b>Value: </b>
                {name} ({nickName})
            </div>
        </div>
    )
}

export default InputSample;