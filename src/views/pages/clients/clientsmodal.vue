<template>
<!-- Add Client Modal -->
        <div id="add_client" class="modal custom-modal fade" role="dialog">
          <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title">Add Client</h5>
                <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
                  <i class="fas fa-times"></i>
                </button>
              </div>
              <div class="modal-body">
                <form>
                  <div class="row">
                    <div class="col-md-6">
                      <div class="form-group">
                        <label class="col-form-label">First Name <span class="text-danger">*</span></label>
                        <input class="form-control" type="text">
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group">
                        <label class="col-form-label">Last Name</label>
                        <input class="form-control" type="text">
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group">
                        <label class="col-form-label">Username <span class="text-danger">*</span></label>
                        <input class="form-control" type="text">
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group">
                        <label class="col-form-label">Email <span class="text-danger">*</span></label>
                        <input class="form-control floating" type="email">
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group">
                        <label class="col-form-label">Password</label>
                        <input class="form-control" type="password">
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group">
                        <label class="col-form-label">Confirm Password</label>
                        <input class="form-control" type="password">
                      </div>
                    </div>
                    <div class="col-md-6">  
                      <div class="form-group">
                        <label class="col-form-label">Client ID <span class="text-danger">*</span></label>
                        <input class="form-control floating" type="text">
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group">
                        <label class="col-form-label">Phone </label>
                        <input class="form-control" type="text">
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group">
                        <label class="col-form-label">Company Name</label>
                        <input class="form-control" type="text">
                      </div>
                    </div>
                  </div>
                  <div class="table-responsive m-t-15">
                    <table class="table table-striped custom-table">
                      <thead>
                        <tr>
                          <th>Module Permission</th>
                          <th class="text-center">Read</th>
                          <th class="text-center">Write</th>
                          <th class="text-center">Create</th>
                          <th class="text-center">Delete</th>
                          <th class="text-center">Import</th>
                          <th class="text-center">Export</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>Projects</td>
                          <td class="text-center">
                            <input checked="" type="checkbox">
                          </td>
                          <td class="text-center">
                            <input checked="" type="checkbox">
                          </td>
                          <td class="text-center">
                            <input checked="" type="checkbox">
                          </td>
                          <td class="text-center">
                            <input checked="" type="checkbox">
                          </td>
                          <td class="text-center">
                            <input checked="" type="checkbox">
                          </td>
                          <td class="text-center">
                            <input checked="" type="checkbox">
                          </td>
                        </tr>
                        <tr>
                          <td>Tasks</td>
                          <td class="text-center">
                            <input checked="" type="checkbox">
                          </td>
                          <td class="text-center">
                            <input checked="" type="checkbox">
                          </td>
                          <td class="text-center">
                            <input checked="" type="checkbox">
                          </td>
                          <td class="text-center">
                            <input checked="" type="checkbox">
                          </td>
                          <td class="text-center">
                            <input checked="" type="checkbox">
                          </td>
                          <td class="text-center">
                            <input checked="" type="checkbox">
                          </td>
                        </tr>
                        <tr>
                          <td>Chat</td>
                          <td class="text-center">
                            <input checked="" type="checkbox">
                          </td>
                          <td class="text-center">
                            <input checked="" type="checkbox">
                          </td>
                          <td class="text-center">
                            <input checked="" type="checkbox">
                          </td>
                          <td class="text-center">
                            <input checked="" type="checkbox">
                          </td>
                          <td class="text-center">
                            <input checked="" type="checkbox">
                          </td>
                          <td class="text-center">
                            <input checked="" type="checkbox">
                          </td>
                        </tr>
                        <tr>
                          <td>Estimates</td>
                          <td class="text-center">
                            <input checked="" type="checkbox">
                          </td>
                          <td class="text-center">
                            <input checked="" type="checkbox">
                          </td>
                          <td class="text-center">
                            <input checked="" type="checkbox">
                          </td>
                          <td class="text-center">
                            <input checked="" type="checkbox">
                          </td>
                          <td class="text-center">
                            <input checked="" type="checkbox">
                          </td>
                          <td class="text-center">
                            <input checked="" type="checkbox">
                          </td>
                        </tr>
                        <tr>
                          <td>Invoices</td>
                          <td class="text-center">
                            <input checked="" type="checkbox">
                          </td>
                          <td class="text-center">
                            <input checked="" type="checkbox">
                          </td>
                          <td class="text-center">
                            <input checked="" type="checkbox">
                          </td>
                          <td class="text-center">
                            <input checked="" type="checkbox">
                          </td>
                          <td class="text-center">
                            <input checked="" type="checkbox">
                          </td>
                          <td class="text-center">
                            <input checked="" type="checkbox">
                          </td>
                        </tr>
                        <tr>
                          <td>Timing Sheets</td>
                          <td class="text-center">
                            <input checked="" type="checkbox">
                          </td>
                          <td class="text-center">
                            <input checked="" type="checkbox">
                          </td>
                          <td class="text-center">
                            <input checked="" type="checkbox">
                          </td>
                          <td class="text-center">
                            <input checked="" type="checkbox">
                          </td>
                          <td class="text-center">
                            <input checked="" type="checkbox">
                          </td>
                          <td class="text-center">
                            <input checked="" type="checkbox">
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div class="submit-section">
                    <button class="btn btn-primary submit-btn">Submit</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <!-- /Add Client Modal -->
        
        <!-- Edit Client Modal -->
        <div id="edit_client" class="modal custom-modal fade" role="dialog">
          <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title">Edit Client</h5>
                <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
                  <i class="fas fa-times"></i>
                </button>
              </div>
              <div class="modal-body">
                <form>
                  <div class="row">
                    <div class="col-md-6">
                      <div class="form-group">
                        <label class="col-form-label">First Name <span class="text-danger">*</span></label>
                        <input class="form-control" value="Barry" type="text">
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group">
                        <label class="col-form-label">Last Name</label>
                        <input class="form-control" value="Cuda" type="text">
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group">
                        <label class="col-form-label">Username <span class="text-danger">*</span></label>
                        <input class="form-control" value="barrycuda" type="text">
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group">
                        <label class="col-form-label">Email <span class="text-danger">*</span></label>
                        <input class="form-control floating" value="barrycuda@example.com" type="email">
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group">
                        <label class="col-form-label">Password</label>
                        <input class="form-control" value="barrycuda" type="password">
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group">
                        <label class="col-form-label">Confirm Password</label>
                        <input class="form-control" value="barrycuda" type="password">
                      </div>
                    </div>
                    <div class="col-md-6">  
                      <div class="form-group">
                        <label class="col-form-label">Client ID <span class="text-danger">*</span></label>
                        <input class="form-control floating" value="CLT-0001" type="text">
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group">
                        <label class="col-form-label">Phone </label>
                        <input class="form-control" value="9876543210" type="text">
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group">
                        <label class="col-form-label">Company Name</label>
                        <input class="form-control" type="text" value="Global Technologies">
                      </div>
                    </div>
                  </div>
                  <div class="table-responsive m-t-15">
                    <table class="table table-striped custom-table">
                      <thead>
                        <tr>
                          <th>Module Permission</th>
                          <th class="text-center">Read</th>
                          <th class="text-center">Write</th>
                          <th class="text-center">Create</th>
                          <th class="text-center">Delete</th>
                          <th class="text-center">Import</th>
                          <th class="text-center">Export</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>Projects</td>
                          <td class="text-center">
                            <input checked="" type="checkbox">
                          </td>
                          <td class="text-center">
                            <input checked="" type="checkbox">
                          </td>
                          <td class="text-center">
                            <input checked="" type="checkbox">
                          </td>
                          <td class="text-center">
                            <input checked="" type="checkbox">
                          </td>
                          <td class="text-center">
                            <input checked="" type="checkbox">
                          </td>
                          <td class="text-center">
                            <input checked="" type="checkbox">
                          </td>
                        </tr>
                        <tr>
                          <td>Tasks</td>
                          <td class="text-center">
                            <input checked="" type="checkbox">
                          </td>
                          <td class="text-center">
                            <input checked="" type="checkbox">
                          </td>
                          <td class="text-center">
                            <input checked="" type="checkbox">
                          </td>
                          <td class="text-center">
                            <input checked="" type="checkbox">
                          </td>
                          <td class="text-center">
                            <input checked="" type="checkbox">
                          </td>
                          <td class="text-center">
                            <input checked="" type="checkbox">
                          </td>
                        </tr>
                        <tr>
                          <td>Chat</td>
                          <td class="text-center">
                            <input checked="" type="checkbox">
                          </td>
                          <td class="text-center">
                            <input checked="" type="checkbox">
                          </td>
                          <td class="text-center">
                            <input checked="" type="checkbox">
                          </td>
                          <td class="text-center">
                            <input checked="" type="checkbox">
                          </td>
                          <td class="text-center">
                            <input checked="" type="checkbox">
                          </td>
                          <td class="text-center">
                            <input checked="" type="checkbox">
                          </td>
                        </tr>
                        <tr>
                          <td>Estimates</td>
                          <td class="text-center">
                            <input checked="" type="checkbox">
                          </td>
                          <td class="text-center">
                            <input checked="" type="checkbox">
                          </td>
                          <td class="text-center">
                            <input checked="" type="checkbox">
                          </td>
                          <td class="text-center">
                            <input checked="" type="checkbox">
                          </td>
                          <td class="text-center">
                            <input checked="" type="checkbox">
                          </td>
                          <td class="text-center">
                            <input checked="" type="checkbox">
                          </td>
                        </tr>
                        <tr>
                          <td>Invoices</td>
                          <td class="text-center">
                            <input checked="" type="checkbox">
                          </td>
                          <td class="text-center">
                            <input checked="" type="checkbox">
                          </td>
                          <td class="text-center">
                            <input checked="" type="checkbox">
                          </td>
                          <td class="text-center">
                            <input checked="" type="checkbox">
                          </td>
                          <td class="text-center">
                            <input checked="" type="checkbox">
                          </td>
                          <td class="text-center">
                            <input checked="" type="checkbox">
                          </td>
                        </tr>
                        <tr>
                          <td>Timing Sheets</td>
                          <td class="text-center">
                            <input checked="" type="checkbox">
                          </td>
                          <td class="text-center">
                            <input checked="" type="checkbox">
                          </td>
                          <td class="text-center">
                            <input checked="" type="checkbox">
                          </td>
                          <td class="text-center">
                            <input checked="" type="checkbox">
                          </td>
                          <td class="text-center">
                            <input checked="" type="checkbox">
                          </td>
                          <td class="text-center">
                            <input checked="" type="checkbox">
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div class="submit-section">
                    <button class="btn btn-primary submit-btn">Save</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <!-- /Edit Client Modal -->
        
        <!-- Delete Client Modal -->
        <div class="modal custom-modal fade" id="delete_client" role="dialog">
          <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
              <div class="modal-body">
                <div class="form-header">
                  <h3>Delete Client</h3>
                  <p>Are you sure want to delete?</p>
                </div>
                <div class="modal-btn delete-action">
                  <div class="row">
                    <div class="col-6">
                      <a href="javascript:void(0);" class="btn btn-primary continue-btn">Delete</a>
                    </div>
                    <div class="col-6">
                      <a href="javascript:void(0);" data-bs-dismiss="modal" class="btn btn-primary cancel-btn">Cancel</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- /Delete Client Modal -->
</template>