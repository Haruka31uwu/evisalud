export const scrollIntoView = (id) => {
    const el = document.getElementById(id)
    console.log(el, id)
    el.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' })
}
export const redirectTo = (path, id) => {
    const router = useRouter()
    router.push(path).then(() => {
        if (id) {
            scrollIntoView(id)
        }
    })
}
export const forceFileDownload = (url, filename) => {
    const link = document.createElement('a')
    link.href = url
    link.download = filename
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
}
export const getClaimForm=ref(false);
export const setShowClaimForm =(value)=> {
    getClaimForm.value=value;
}