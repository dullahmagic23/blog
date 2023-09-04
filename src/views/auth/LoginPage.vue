<template>
    <div class="container">
        <div class="row justify-content-center">
          <div class="col-8">
            <div class="row">
              <div class="col-md-10">
                <div class="card shadow">
                    <div class="card-body">
                      <h3 class="text-black-50">Please Login</h3>
                      <div class="row form-group">
                        <div class="col-md-2"></div>
                        <input type="text" class="form-control col-8" placeholder="Enter your username">
                        <div class="col-md-2"></div>
                      </div>
                      <div class="row form-group">
                        <div class="col-md-2"></div>
                        <input type="password" class="form-control col-8" placeholder="Enter your password">
                        <div class="col-md-2"></div>
                      </div>
                      <div class="row form-group">
                        <div class="col-md-12">
                          <button class="btn btn-primary">
                            Login
                          </button>
                        </div>

                      </div>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
</template>

<script>
export default {
   name: "LoginPage"
};
</script>


<style lang="scss" scoped>

</style>