const getUserFromSession = (req) => {
  const sessionStore = req.sessionStore;
  const sessions = sessionStore.sessions;
  let user = null;

  for (const sessionId in sessions) {
    if (Object.prototype.hasOwnProperty.call(sessions, sessionId)) {
      const sessionData = JSON.parse(sessions[sessionId]);
      const passportUser = sessionData.passport?.user;
      if (passportUser) {
        user = passportUser;
        break;
      }
    }
  }

  return user;
};

module.exports = { getUserFromSession };
