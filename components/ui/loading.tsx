
interface LoadingProps{
    message : string;
}

const Loading : React.FC<LoadingProps> = ({
    message
}) => {
    return ( 
        <div className="flex items-center justify-center h-full w-full text-neutral-500">
            <p className="text-2xl font-semibold">{message}</p>
        </div>
    );
}
 
export default Loading;