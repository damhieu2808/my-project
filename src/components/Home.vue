<template>
    <div>
      <img src="../assets/19967.png" class="w-100" />
      <div>
        <p>MIOTO - CÙNG BẠN TRÊN MỌI HÀNH TRÌNH</p>
        <div>
          <div class="row p-5">
            <div class="col-md-2 mb-3">
              <ul
                class="nav nav-pills flex-column"
                id="experienceTab"
                role="tablist"
              >
                <li class="nav-item">
                  <a
                    class="nav-link active"
                    id="home-tab"
                    data-toggle="tab"
                    href="#snit"
                    role="tab"
                    aria-controls="home"
                    aria-selected="true"
                    >Field 1</a
                  >
                </li>
                <li class="nav-item">
                  <a
                    class="nav-link"
                    id="profile-tab"
                    data-toggle="tab"
                    href="#devs"
                    role="tab"
                    aria-controls="profile"
                    aria-selected="false"
                    >Field 2</a
                  >
                </li>
              </ul>
            </div>
            <!-- /.col-md-4 -->
            <div class="col-md-10">
              <div class="tab-content" id="experienceTabContent">
                <div
                  class="tab-pane fade show active text-left text-light"
                  id="snit"
                  role="tabpanel"
                  aria-labelledby="home-tab"
                >
                  <h3>Field 1</h3>
                  <span class="date-range code-font">Other Details</span>
                  <ul class="pt-2">
                    <li>The cats are cute.</li>
                    <li>The birds are singing.</li>
                  </ul>
                </div>

                <div
                  class="tab-pane fade text-left text-light"
                  id="devs"
                  role="tabpanel"
                  aria-labelledby="profile-tab"
                >
                  <h3>Field 2</h3>
                  <span class="date-range code-font">Other Details</span>
                  <ul class="pt-2">
                    <li>The volcano is eruting.</li>
                    <li>Everything is on fire.</li>
                  </ul>
                </div>
              </div>
              <!--tab content end-->
            </div>
            <!-- col-md-8 end -->
          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
:root {
  --theme-yellow: #fee715ff;
  --theme-black: #101820ff;
  --theme-gray: #8892b0;
}

body {
  background-color: var(--theme-black);
}
#experienceTab.nav-pills .nav-link.active {
  color: var(--theme-yellow) !important;
  background-color: transparent;
  border-radius: 0px;
  border-left: 3px solid var(--theme-yellow);
}
#experienceTab.nav-pills .nav-link {
  border-radius: 0px;
  border-left: 2px solid var(--theme-gray);
}
.date-range {
  letter-spacing: 0.01em;
  color: var(--theme-gray);
}

/* STUB  LINKS */
a {
  color: var(--theme-gray);
  transition: 0.3s eas-in-out;
}
a:hover {
  color: var(--theme-yellow);
}
</style>
