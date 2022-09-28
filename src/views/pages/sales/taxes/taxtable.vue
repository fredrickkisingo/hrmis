<template>
<div class="row">
            <div class="col-md-12">
              <div class="table-responsive">
                <table class="table table-striped custom-table mb-0">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Tax Name </th>
                      <th>Tax Percentage (%) </th>
                      <th>Status</th>
                      <th class="text-end">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>VAT</td>
                      <td>14%</td>
                      <td>
                        <div class="dropdown action-label">
                          <a class="role-info role-bg-one dropdown-toggle" href="#" data-bs-toggle="dropdown" aria-expanded="false">
                            <i class="fa fa-dot-circle-o text-danger"></i> Inactive
                          </a>
                          <div class="dropdown-menu">
                            <a class="dropdown-item" href="#"><i class="fa fa-dot-circle-o text-success"></i> Active</a>
                            <a class="dropdown-item" href="#"><i class="fa fa-dot-circle-o text-danger"></i> Inactive</a>
                          </div>
                        </div>
                      </td>
                      <td class="text-end ico-sec">
                        <a class="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#edit_tax"><i class="fas fa-pen"></i></a>
                        <a class="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#delete_tax"><i class="far fa-trash-alt"></i></a>
                      </td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>GST</td>
                      <td>30%</td>
                      <td>
                        <div class="dropdown action-label">
                          <a class="role-info role-bg-one dropdown-toggle" href="#" data-bs-toggle="dropdown" aria-expanded="false">
                            <i class="fa fa-dot-circle-o text-danger"></i> Active
                          </a>
                          <div class="dropdown-menu">
                            <a class="dropdown-item" href="#"><i class="fa fa-dot-circle-o text-success"></i> Active</a>
                            <a class="dropdown-item" href="#"><i class="fa fa-dot-circle-o text-danger"></i> Inactive</a>
                          </div>
                        </div>
                      </td>
                      <td class="text-end ico-sec">
                        <a class="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#edit_tax"><i class="fas fa-pen"></i></a>
                        <a class="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#delete_tax"><i class="far fa-trash-alt"></i></a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
</template>