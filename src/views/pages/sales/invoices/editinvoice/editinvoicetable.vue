<template>
<div class="row">
                  <div class="col-md-12 col-sm-12">
                    <div class="table-responsive">
                      <table class="table table-hover table-white">
                        <thead>
                          <tr>
                            <th style="width: 20px">#</th>
                            <th class="col-sm-2">Item</th>
                            <th class="col-md-6">Description</th>
                            <th style="width:100px;">Unit Cost</th>
                            <th style="width:80px;">Qty</th>
                            <th>Amount</th>
                            <th></th>
                          </tr>
                        </thead>
                        <tbody>
                        <tr>
                          <td>1</td>
                          <td>
                            <input class="form-control" type="text" value="Vehicle Module" style="min-width:150px">
                          </td>
                          <td>
                            <input class="form-control" type="text" value="Create, edit delete functionlity" style="min-width:150px">
                          </td>
                          <td>
                            <input class="form-control" style="width:100px" type="text" value="112">
                          </td>
                          <td>
                            <input class="form-control" style="width:80px" type="text" value="1">
                          </td>
                          <td>
                            <input class="form-control" readonly style="width:120px" type="text" value="112">
                          </td>
                          <td><a href="javascript:void(0)" class="text-success font-18" title="Add"><i class="fa fa-plus"></i></a></td>
                        </tr>
                        <tr>
                          <td>2</td>
                          <td>
                            <input class="form-control" type="text" value="Vehicle Module" style="min-width:150px">
                          </td>
                          <td>
                            <input class="form-control" type="text" value="Create, edit delete functionlity" style="min-width:150px">
                          </td>
                          <td>
                            <input class="form-control" style="width:100px" type="text" value="112">
                          </td>
                          <td>
                            <input class="form-control" style="width:80px" type="text" value="1">
                          </td>
                          <td>
                            <input class="form-control" readonly style="width:120px" type="text" value="112">
                          </td>
                          <td><a href="javascript:void(0)" class="text-danger font-18" title="Remove"><i class="far fa-trash-alt"></i></a></td>
                        </tr>
                        </tbody>
                      </table>
                    </div>
                    <div class="table-responsive">
                      <table class="table table-hover table-white">
                        <tbody>
                          <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td class="text-end">Total</td>
                            <td style="text-align: right; width: 230px">112</td>
                          </tr>
                          <tr>
                            <td colspan="5" style="text-align: right">Tax</td>
                            <td style="text-align: right;width: 230px">
                              <input class="form-control text-end" value="0" readonly type="text">
                            </td>
                          </tr>
                          <tr>
                            <td colspan="5" style="text-align: right">
                              Discount %
                            </td>
                            <td style="text-align: right; width: 230px">
                              <input class="form-control text-end" value="0" type="text">
                            </td>
                          </tr>
                          <tr>
                            <td colspan="5" style="text-align: right; font-weight: bold">
                              Grand Total
                            </td>
                            <td style="text-align: right; font-weight: bold; font-size: 16px;width: 230px">
                              $ 112
                            </td>
                          </tr>
                        </tbody>
                      </table>                               
                    </div>
                    <div class="row">
                      <div class="col-md-12">
                        <div class="form-group">
                          <label>Other Information</label>
                          <textarea class="form-control" rows="4"></textarea>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
</template>