
async function fetchProfileData() {
    const url = 'https://raw.githubusercontent.com/daniellimadev/Challenge-js-portfolio/main/data/profile.json?token=GHSAT0AAAAAACRXIX24JGIOCRD32VLYATOAZSCG2LQ';
    const response = await fetch(url)
    const profileData = await response.json()
    return profileData
}
