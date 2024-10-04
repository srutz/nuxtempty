

export function useContentData() {
    const contentData = useState("contentdata01", () => 'no content')
    const setContentData = (newData: string) => {
        contentData.value = newData
    }
    return {
        contentData, setContentData
    }
}0