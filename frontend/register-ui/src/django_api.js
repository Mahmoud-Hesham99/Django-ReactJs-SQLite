const backend_url = 'http://127.0.0.1:8000/' // this is the default url for django server

export const apis={
    get_all_accounts:backend_url + "accounts/",
    sign_up:backend_url + "signup/",
    login:backend_url + "login/",
    delete_account:backend_url + "delete_account/", // you need to add the id of the user to delete in the end of the url such delete_account/<int:id>/
    update_profile:backend_url + "update_profile/",
    get_profile:backend_url + "get_profile/", // you need to add the id of the user to get in the end of the url such get_profile/<int:id>/
}