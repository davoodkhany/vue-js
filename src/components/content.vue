<template>
    <div class="d-flex justify-content-center mt-5" >
        <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
  <li class="nav-item" role="presentation">
    <button class="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">Home</button>
  </li>
  <li class="nav-item" role="presentation">
    <button class="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Profile</button>
  </li>

</ul>
  </div>
<div class="tab-content  flex-column justify-content-center d-flex align-items-center " id="pills-tabContent">
  <div class="tab-pane fade show active col-4 mb-2" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
    <div class="card">
        <div class="card-body d-flex justify-content-between align-items-center ">
            hello Davood
            <div class="form-group ">
                <button class="btn btn-primary btn-sm form-contoll">edit</button>
                 <button class="btn btn-danger btn-sm form-contoll">Delete</button>
            </div>
        </div>
    </div>
  </div>
  <div class="tab-pane fade show active col-4 " id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
    <div class="card">
        <div class="card-body d-flex justify-content-between align-items-center ">
            hello Davood
            <div class="form-group ">
                <button class="btn btn-primary btn-sm  form-contoll">edit</button>
                 <button class="btn btn-danger btn-sm  form-contoll">Delete</button>
            </div>
        </div>
    </div>
  </div>
</div>
       
  
</template>