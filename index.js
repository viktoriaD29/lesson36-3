/*const fetchUser = (userID) => {
  return fetch(`https://api.github.com/users/${userID}`)
    .then((response) => response.json())
    .then((res) => res.blog);
};

const getUsersBlog = async (users) => {
  const promises = users.map(async (userID) => {
    const res = await fetchUser(userID);
    return res;
  });
  return Promise.all(promises);
};
getUsersBlog(['google', 'facebook']).then((linksList) =>
  console.log(linksList)
);*/

const fetchUser = (userID) => {
  return fetch(`https://api.github.com/users/${userID}`)
    .then((response) => response.json())
    .then((res) => res.blog);
};

export const getUsersBlogs = async (users) => {
  try {
    const promises = users.map(async (userID) => {
      const res = await fetchUser(userID);
      return res;
    });
    return Promise.all(promises);
  } catch {
    return Promise.reject();
  }
};
getUsersBlogs(['google', 'facebook']).then((linksList) =>
  console.log(linksList)
);

