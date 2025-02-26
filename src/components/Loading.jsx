export function Loading() {
    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
            <div className="bg-neutral-800 px-6 py-4 rounded-md flex justify-center items-center gap-4">
                <p className="text-white font-bold">Loading</p>
                <div className="w-12 h-12 border-t-4 border-red-600 border-solid rounded-full animate-spin"></div>
            </div>
        </div>
    )
}