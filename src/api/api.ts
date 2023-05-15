import axios from "axios";


export const instance = axios.create({
    withCredentials: true,
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    headers: {
        "API-KEY": "fe7c9017-7300-4245-ac17-66d06f0439a8"
    }

})

export const usersAPI = {
    getUsers(currentPage: number, pageSize: number) {
        return instance.get(`/users?page=${currentPage} & count =${pageSize}`)
            .then(response => {
                return response.data
            })
    },
    unFollowUsers(id: number) {
        return instance.delete(`/follow/${id}`)
            .then(response => {
                return response.data
            })
    },
    followUsers(id: number) {
        return instance.post(`/follow/${id}`, {})
            .then(response => {
                return response.data
            })
    },

    getProfile(userId: string) {
        return instance.get(`profile/` + userId)
            .then(response => {
                return response.data
            })
    }

}



export const authAPI = {
    getAuthMe() {
        return instance.get(`auth/me`)
            .then(response => {
                return response.data
            })
    },
}


// axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
//     .then(response => {
//         this.props.setUserProfile(response.data);
//     });


/* axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`,
          {withCredentials: true})
          .then(response => {
              if(response.data.resultCode === 0 ){
                  let {id,email,login} = response.data.data
                  this.props.setAuthData(id,email,login)
              }
          });*/


// axios.post(`https://social-network.samuraijs.com/api/1.0//follow/${el.id}`, {}, {
//     withCredentials: true,
//     headers: {
//         "API-KEY": "fe7c9017-7300-4245-ac17-66d06f0439a8"
//     }
// })


// axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.usersPage.currentPage} & count =${this.props.usersPage.pageSize}`,{
//     withCredentials:true
// })


// axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber} & count =${this.props.usersPage.pageSize}`,{
//     withCredentials:true
// })


// axios.delete(`https://social-network.samuraijs.com/api/1.0//follow/${el.id}`, {
//     withCredentials: true,
//     headers: {
//         "API-KEY": "fe7c9017-7300-4245-ac17-66d06f0439a8"
//     }
// })