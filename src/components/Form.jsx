import "../SCSS/Form.scss";

export const Form = () => {
  return (
    <>
      <div className="form__tittle d-flex flex-column text-center text-white gap-5 mt-5">
        <span>Let’s start this journey together</span>
        <span>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
          culpa dolor, deleniti atque nulla ab facilis magni voluptatem.
        </span>
      </div>

      <form>
        <div className="form__items">
          <div className="form__left">
            <div className="form__input-group">
              <label className="label__item" htmlFor="name">
                Name
              </label>
              <input
                className="input__item"
                type="text"
                id="name"
                required
                placeholder="Full name"
              />
            </div>

            <div className="form__input-group">
              <label className="label__item" htmlFor="email" required>
                Email
              </label>
              <input
                className="input__item"
                type="email"
                id="email"
                placeholder="email adress"
              />
            </div>
          </div>

          <div className="form__right">
            <div className="form__input-group">
              <label className="label__item" htmlFor="whatsapp">
                Phone number
              </label>
              <input
                className="input__item"
                type="number"
                id="whatsapp"
                required
                placeholder="add area code"
              />
            </div>

            <div className="form__input-group">
              <label className="label__item" htmlFor="interest">
                I am interested in
              </label>
              <input
                className="input__item"
                type="text"
                id="interest"
                required
              />
            </div>
          </div>
        </div>

        <label className="label__item" htmlFor="comments">
          Comments
        </label>
        <textarea
          id="comments"
          name="comments"
          cols="100"
          rows="10"
          className="text__area"
          placeholder="Some comment"
        ></textarea>

        <button
          className="btn btn-warning fw-bolder mb-3 text-white"
          type="submit"
        >
          SUBMIT
        </button>
      </form>
    </>
  );
};
