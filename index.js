var userSetting = document.querySelector(".user-setting");

var avatarUser = document.querySelector(".avatar-user");

function onClickAvatarUser() {
    userSetting.classList.toggle('hidden')
}

avatarUser.addEventListener("click", onClickAvatarUser)