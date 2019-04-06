const options = {
  services: [
    {
      path: 'users',
      delete: true,
      randomize:false,
      templates: [
        {
          email:'admin@rope.com',
          password:'password',
          name:'admin',
          role:'admin'
        },
        {
          email:'faiyaz@rope.com',
          password:'password',
          name:'faiyaz',
          role:'user'
        },
        {
          email:'umar@rope.com',
          password:'password',
          name:'umar',
          role:'user'
        },
        {
          email:'akshay@rope.com',
          password:'password',
          name:'akshay',
          role:'user'
        },
      ]
    }
  ]
};


module.exports = options;