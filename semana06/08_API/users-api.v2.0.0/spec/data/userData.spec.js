describe("Init Testing  without data (empty array)", function () {
  const userData = require('../../src/data/userData');
  let username
  let password
  beforeEach(function () {
    username = "vgamez"
    password = "123"
  });

  it("Should return a empty array (empty user array)", function () {
    expect(userData.list().length).toBeLessThan(1); // lenght < 1 ? 
  });

  it('Should return an error, becouse It can\'t search any user (empty array)', function () {
    expect(function () {
      return userData.retrieve(username)
    }).toThrow(); // Throw Error ?
  })

  it('Should return an error, becouse It can\'t update any user (empty array)', function () {
    expect(function () {
      return userData.update(username, password)
    }).toThrow(); // Throw Error ?
  })

  it('Should return an error, becouse It can\'t delete any user (empty array)', function () {
    expect(function () {
      return userData.delete(username)
    }).toThrow(); // Throw Error ?
  })
  it('Should create a new user', function () {
    expect(userData.create(username, password)).not.toEqual({}) // Return a empty object ? 
  })

  describe('when there is a user, and we need to search, update or delete it', function () {
    beforeEach(function () {
      updatePassword = "56785"
    });

    it('Should return a no empty array', function () {
      expect(userData.list().length).toBeGreaterThan(0); // lenght > 0 ? 
    })

    it('Should return and object', function () {
      expect(typeof (userData.retrieve(username))).toBe('object') // {username, password} === object ?
    })

    it('Should return the same name which we searched ', function () {
      expect(userData.retrieve(username).username).toEqual(username) // useres.username === username ?
    })

    it('Should not return and error when we update user', function ()  {
      expect(function () {
        userData.update(username, updatePassword)
      }).not.toThrow() //throw Error ? 
    })

    it("Should delete and user, and userData.list().length shout be []", function () {
      userData.delete(username)
      expect(userData.list().length).toBeLessThan(1) //  length < 1 ? 
    })

  })
});