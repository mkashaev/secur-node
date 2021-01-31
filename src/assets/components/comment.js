module.exports.comment = (author, description) => {
  return `
    <div class="card p-3 mt-2">
      <div class="d-flex justify-content-between align-items-center">
        <div class="user d-flex flex-row align-items-center">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png"
            width="30"
            class="user-img rounded-circle mr-2"
          >
          <span>
            <small class="font-weight-bold text-primary">
              ${author}
            </small>
          </span>
        </div>
      </div>
      <div class="action d-flex justify-content-between mt-2 align-items-center">
        <small class="font-weight-bold">${description}</small>
      </div>
    </div>
  `;
};
