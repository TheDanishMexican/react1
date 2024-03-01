interface ImageButtonProps {
    imageURL: string
    onClick: () => void
}

export default function ImageButton({ imageURL, onClick }: ImageButtonProps) {
    return (
        <button onClick={onClick}>
            <img
                style={{ width: '50px', height: '50px' }}
                src={imageURL}
                alt="button"
            />
        </button>
    )
}
