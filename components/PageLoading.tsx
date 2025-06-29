import Loading from "./Loading";

export default function PageLoading() {
    return (
        <div className="flex items-center justify-center flex-1">
            <Loading className="animate-spin w-12 h-12" />
        </div>
    );
}