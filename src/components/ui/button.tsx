type MyProps = {
    onClick: () => void;
    className: string,
    label: string
    ref: React.Ref<HTMLButtonElement> | undefined,
}

export default function Button(props: MyProps){
    return  <>
            <button ref={props.ref} onClick={props.onClick} type="submit" className={props.className} >{props.label}
            </button>
            </>
}