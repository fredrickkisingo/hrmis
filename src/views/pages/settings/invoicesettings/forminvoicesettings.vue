<template>
<div class="col-md-8 col-lg-9 settings-cont">
<div class="card p-4">
<form>
                                <div class="form-group row">
                                    <label class="col-lg-3 col-form-label">Invoice prefix</label>
                                    <div class="col-lg-9">
                                        <input type="text" value="INV" class="form-control">
                                    </div>
                                </div>
                                <div class="form-group row">
                                    <label class="col-lg-3 col-form-label">Invoice Logo</label>
                                    <div class="col-lg-7">
                                        <input type="file" class="form-control">
                                        <span class="form-text text-muted">Recommended image size is 200px x 40px</span>
                                    </div>
                                    <div class="col-lg-2">
                                        <div class="img-thumbnail float-end"><img src="../../../../assets/img/logo3.png" class="img-fluid" alt="" width="140" height="40"></div>
                                    </div>
                                </div>
                                <div class="submit-section">
                                    <button class="btn btn-primary submit-btn">Save</button>
                                </div>
</form>
</div>
</div>
</template>