import React from "react";

export function Checked(props) {
    return (
        <svg
            width="40"
            height="39"
            viewBox="0 0 40 39"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <path
                d="M12 2.5H28C32.6944 2.5 36.5 6.30559 36.5 11V27C36.5 31.6944 32.6944 35.5 28 35.5H12C7.30557 35.5 3.49996 31.6944 3.49996 27V11C3.49996 6.30559 7.30558 2.5 12 2.5Z"
                fill="white"
                stroke="#E54C2E"
                strokeWidth="3"
            />
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M28.1781 12.4802L18.4769 22.0635L12.7841 16.4803C12.1414 15.8454 11.0995 15.8454 10.4569 16.4803C9.81418 17.1151 9.81418 18.1444 10.4569 18.7793L17.3175 25.5078C17.9602 26.1427 19.0021 26.1427 19.6447 25.5078L30.5054 14.7792C31.1481 14.1444 31.1481 13.1151 30.5054 12.4802C29.8627 11.8454 28.8208 11.8454 28.1781 12.4802Z"
                fill="#F04E21"
            />
        </svg>
    );
}

export function Unchecked(props) {
    return (
        <svg
            width="40"
            height="39"
            viewBox="0 0 40 39"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <path
                d="M12 2.5H28C32.6944 2.5 36.5 6.30559 36.5 11V27C36.5 31.6944 32.6944 35.5 28 35.5H12C7.30557 35.5 3.49996 31.6944 3.49996 27V11C3.49996 6.30559 7.30558 2.5 12 2.5Z"
                fill="white"
                stroke="#E54C2E"
                strokeWidth="3"
            />
        </svg>
    );
}

export function Close(props) {
    return (
        <svg
            className={`closeIcon`}
            viewBox="0 0 52 52"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <path
                d="M25.5 2.50001C38.2025 2.50001 48.5 12.7974 48.5 25.5C48.5 38.2026 38.2025 48.5 25.5 48.5C12.7974 48.5 2.50006 38.2026 2.50006 25.5C2.50006 12.7974 12.7974 2.50001 25.5 2.50001Z"
                fill="white"
                stroke="#F04E21"
                strokeWidth="3"
            />
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M36.9086 17.4717C37.842 16.5383 37.842 15.0249 36.9086 14.0914C35.9751 13.1579 34.4617 13.1579 33.5283 14.0914L25.5 22.1197L17.4717 14.0914C16.5383 13.1579 15.0249 13.1579 14.0914 14.0914C13.1579 15.0249 13.1579 16.5383 14.0914 17.4717L22.1197 25.5L14.0914 33.5282C13.1579 34.4617 13.1579 35.9751 14.0914 36.9086C15.0249 37.842 16.5383 37.842 17.4717 36.9086L25.5 28.8803L33.5283 36.9086C34.4617 37.842 35.9751 37.842 36.9086 36.9086C37.842 35.9751 37.842 34.4617 36.9086 33.5282L28.8803 25.5L36.9086 17.4717Z"
                fill="#E54C2E"
            />
        </svg>
    );
}

export function Ok(props) {
    return (
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
            <path d="m4.721 12.881c-.613 1.205.083 1.781 1.671 2.765 1.35.834 3.215 1.139 4.413 1.261-.491.472 1.759-1.692-4.721 4.541-1.374 1.317.838 3.43 2.211 2.141l3.717-3.585c1.423 1.369 2.787 2.681 3.717 3.59 1.374 1.294 3.585-.801 2.226-2.141-.102-.097-5.037-4.831-4.736-4.541 1.213-.122 3.05-.445 4.384-1.261l-.001-.001c1.588-.989 2.284-1.564 1.68-2.769-.365-.684-1.349-1.256-2.659-.267 0 0-1.769 1.355-4.622 1.355-2.854 0-4.622-1.355-4.622-1.355-1.309-.994-2.297-.417-2.658.267z" />
            <path d="m11.999 12.142c3.478 0 6.318-2.718 6.318-6.064 0-3.36-2.84-6.078-6.318-6.078-3.479 0-6.319 2.718-6.319 6.078 0 3.346 2.84 6.064 6.319 6.064zm0-9.063c1.709 0 3.103 1.341 3.103 2.999 0 1.644-1.394 2.985-3.103 2.985s-3.103-1.341-3.103-2.985c-.001-1.659 1.393-2.999 3.103-2.999z" />
        </svg>
    );
}

export function Vk(props) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 3333 1980"
            {...props}
        >
            <path d="M3257 134c23-77 0-134-110-134h-365c-93 0-135 49-159 103 0 0-185 452-448 746-85 85-124 112-170 112-23 0-58-27-58-104V135c0-93-26-134-103-134h-573c-58 0-93 43-93 84 0 88 131 108 145 355v537c0 118-21 139-68 139-124 0-424-454-603-974C617 41 582 0 489 0H124C20 0-1 49-1 103c0 97 124 576 576 1209 301 433 726 667 1112 667 232 0 260-52 260-142v-327c0-104 22-125 95-125 54 0 147 27 363 236 247 247 288 358 427 358h365c104 0 156-52 126-155-33-102-151-251-308-427-85-100-212-209-251-263-54-70-39-100 0-162 0 0 444-626 491-838z" />
        </svg>
    );
}

export function Instagram(props) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 510 510"
            {...props}
        >
            <path d="M459,0H51C22.95,0,0,22.95,0,51v408c0,28.05,22.95,51,51,51h408c28.05,0,51-22.95,51-51V51C510,22.95,487.05,0,459,0z M255,153c56.1,0,102,45.9,102,102c0,56.1-45.9,102-102,102c-56.1,0-102-45.9-102-102C153,198.9,198.9,153,255,153z M63.75,459 C56.1,459,51,453.9,51,446.25V229.5h53.55C102,237.15,102,247.35,102,255c0,84.15,68.85,153,153,153c84.15,0,153-68.85,153-153 c0-7.65,0-17.85-2.55-25.5H459v216.75c0,7.65-5.1,12.75-12.75,12.75H63.75z M459,114.75c0,7.65-5.1,12.75-12.75,12.75h-51 c-7.65,0-12.75-5.1-12.75-12.75v-51c0-7.65,5.1-12.75,12.75-12.75h51C453.9,51,459,56.1,459,63.75V114.75z" />
        </svg>
    );
}

export function Fb(props) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1792 1792"
            {...props}
        >
            <path d="M1376 128q119 0 203.5 84.5t84.5 203.5v960q0 119-84.5 203.5t-203.5 84.5h-188v-595h199l30-232h-229v-148q0-56 23.5-84t91.5-28l122-1v-207q-63-9-178-9-136 0-217.5 80t-81.5 226v171h-200v232h200v595h-532q-119 0-203.5-84.5t-84.5-203.5v-960q0-119 84.5-203.5t203.5-84.5h960z" />
        </svg>
    );
}
export function Lens(props) {
    return (
        <svg
            width="30"
            height="31"
            viewBox="0 0 30 31"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <rect
                x="1.18994"
                y="1.36621"
                width="27.7042"
                height="27.7042"
                rx="13.8521"
                fill="white"
                stroke="#E4491F"
                strokeWidth="2"
            />
            <g clipPath="url(#clip0)">
                <path
                    d="M17.7431 16.5325C19.4321 14.1475 18.8672 10.8449 16.4822 9.15632C14.0972 7.46772 10.7946 8.0322 9.10603 10.4176C7.41743 12.8026 7.98191 16.1048 10.3673 17.7934C12.0697 18.9986 14.3203 19.0914 16.1158 18.0311L20.0172 21.909C20.4384 22.3524 21.1393 22.3702 21.5827 21.9489C22.0261 21.5281 22.0439 20.8272 21.623 20.3838C21.6097 20.3697 21.5968 20.3568 21.5827 20.3434L17.7431 16.5325ZM13.4213 16.894C11.5366 16.8944 10.0086 15.3676 10.0074 13.4829C10.007 11.5982 11.5338 10.0702 13.4189 10.0694C15.3012 10.0686 16.8284 11.593 16.832 13.4753C16.8353 15.3604 15.3093 16.8908 13.4238 16.894C13.423 16.894 13.4225 16.894 13.4213 16.894Z"
                    fill="#E4491F"
                />
            </g>
            <defs>
                <clipPath id="clip0">
                    <rect
                        width="14.0704"
                        height="14.0704"
                        fill="white"
                        transform="translate(8.00684 8.18311)"
                    />
                </clipPath>
            </defs>
        </svg>
    );
}
export function ArrowPrew(props) {
    return (
        <svg
            width="16"
            height="24"
            viewBox="0 0 16 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M0 12L16 0V24L0 12Z"
                fill="white"
            />
        </svg>
    );
}
export function ArrowNext(props) {
    return (
        <svg
            width="16"
            height="24"
            viewBox="0 0 16 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M16 12L0 0V24L16 12Z"
                fill="white"
            />
        </svg>
    );
}
export function ArrowDown(props) {
    return (
        <svg
            viewBox="0 0 14 9"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M1.69096 1.23673C1.33677 0.882496 0.762373 0.882496 0.408076 1.23673C0.0537961 1.59103 0.0537961 2.16538 0.408076 2.51967L6.39497 8.5066C6.74925 8.86088 7.32364 8.86088 7.67794 8.5066L13.6648 2.51967C14.0191 2.16538 14.0191 1.59103 13.6648 1.23673C13.3106 0.882496 12.7362 0.882496 12.3819 1.23673L7.03645 6.58222L1.69096 1.23673Z"
                fill="white"
            />
        </svg>
    );
}

export function ArrowPrewMobile(props) {
    return (
        <svg
            width="50"
            height="58"
            viewBox="0 0 50 58"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M48 54.9808L3 29L48 3.01924L48 54.9808Z"
                fill="#07A1F3"
                stroke="white"
                strokeWidth="3"
            />
        </svg>
    );
}
export function ArrowNextMobile(props) {
    return (
        <svg
            width="50"
            height="58"
            viewBox="0 0 50 58"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M2 3.01924L47 29L2 54.9808L2 3.01924Z"
                fill="#07A1F3"
                stroke="white"
                strokeWidth="3"
            />
        </svg>
    );
}

export function ArrowPrewSlider(props) {
    return (
        <svg width="79" height="95" viewBox="0 0 79 95" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M66.0532 7.25385L66.0532 74.2003L8.07582 40.7271L66.0532 7.25385Z" fill="#3399FF" />
            <path d="M66.0532 7.25385L66.0532 74.2003L8.07582 40.7271L66.0532 7.25385Z" stroke="white" strokeWidth="8" />
            <path d="M66.0532 7.25385L66.0532 74.2003L8.07582 40.7271L66.0532 7.25385Z" stroke="url(#paint0_linear)" strokeWidth="8" />
            <defs>
                <linearGradient id="paint0_linear" x1="70.0532" y1="81.1285" x2="23.4016" y2="0.325649" gradientUnits="userSpaceOnUse">
                    <stop stopColor="white" />
                    <stop offset="1" stopColor="white" stopOpacity="0" />
                </linearGradient>
            </defs>
        </svg>
    );
}
export function ArrowNextSlider(props) {
    return (
        <svg width="110" height="105" viewBox="0 0 110 105" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M40.7638 97.7117L40.7638 28.0404L101.101 62.8761L40.7638 97.7117Z" fill="#3399FF" />
            <path d="M40.7638 97.7117L40.7638 28.0404L101.101 62.8761L40.7638 97.7117Z" stroke="white" stroke-width="8" />
            <path d="M40.7638 97.7117L40.7638 28.0404L101.101 62.8761L40.7638 97.7117Z" stroke="url(#paint0_linear)" strokeWidth="8" />
            <defs>
                <linearGradient id="paint0_linear" x1="36.7638" y1="21.1122" x2="84.9885" y2="104.64" gradientUnits="userSpaceOnUse">
                    <stop stopColor="white" />
                    <stop offset="1" stopColor="white" stopOpacity="0" />
                </linearGradient>
            </defs>
        </svg>
    );
}

