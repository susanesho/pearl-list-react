import React from 'react'

export default (props) => {
return (
<div class="mdl-grid">
  <div class="mdl-cell mdl-cell--4-col">
    <div class="demo-card-square mdl-card mdl-shadow--2dp">
      <div class="mdl-card__title mdl-card--expand">
        <h2 class="mdl-card__title-text"> Bucketlist & Items
        </h2>
      </div>
      <div class="mdl-card__supporting-text">
      </div>
      <div class="mdl-card__actions mdl-card--border">
        <button class="mdl-button mdl-js-button mdl-button--raised mdl-button--accent">
        <h5> Current Date:</h5>
        </button>
      </div>
    </div>
  </div>
  <div class="mdl-cell mdl-cell--4-col">
    <div class="demo-card-wide mdl-card mdl-shadow--2dp">
      <div class="mdl-card__title mdl-card__actions mdl-card--border upper">
        <h2>Category</h2>
      </div>
      <div class="mdl-card__supporting-text">
        <div class="mui-panel">
          <a>
            <h4>Bucketlist name</h4>
            <h4>Date added</h4>
          </a>
        </div>
      </div>
      <div class="mdl-card__actions mdl-card--border upper down">
        <div class="in-line">
          <a>
            <a href="">
              <button class="mdl-button mdl-js-button mdl-button--raised mdl-button--accent">
              <i class="material-icons">mode_edit</i>
              Edit
              </button>
            </a>
            <form action="" method="post">
              <input type="hidden" name="_method" value="delete" />
              <button class="mdl-button mdl-js-button mdl-button--raised mdl-button--accent">
              <i class="material-icons">delete_forever</i>
              Delete
              </button>
            </form>
          </a>
        </div>
      </div>
    </div>
  </div>
  <div class="mdl-cell mdl-cell--4--col">
    <div class="demo-card-wide mdl-card mdl-shadow--2dp">
      <div class="mdl-card__title upper">
        <h2>All Products</h2>
      </div>
      <div class="mdl-card__actions mdl-card--border">
        <div class="mui-panel">
          <h4></h4>
          <h4></h4>
          <div class="in-line">
            <a>
              <a href="">
                <button class="mdl-button mdl-js-button mdl-button--raised mdl-button--accent">
                <i class="material-icons">mode_edit</i>
                Edit
                </button>
              </a>
              <form action="" method="post">
                <input type="hidden" name="_method" value="delete" />
                <button class="mdl-button mdl-js-button mdl-button--raised mdl-button--accent">
                <i class="material-icons">delete_forever</i>
                Delete
                </button>
              </form>
            </a>
          </div>
        </div>
      </div>
      <div class="mdl-card__actions mdl-card--border upper down">
      </div>
    </div>
  </div>
</div>
);
}