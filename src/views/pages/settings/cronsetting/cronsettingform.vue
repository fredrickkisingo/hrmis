<template>
<div class="col-md-8 col-lg-9 settings-cont">
                            <div class="card p-4">
    <form>
                                <div class="form-group">
                                    <label>Cron Key <span class="text-danger">*</span></label>
                                    <input type="text" class="form-control" value="">
                                </div>
                                <div class="form-group">
                                    <label>Auto Backup Database <span class="text-danger">*</span></label><br>
                                    <label class="switch">
                                        <input type="hidden" value="off" name="auto_backup_db">
                                        <input type="checkbox" checked="checked" name="auto_backup_db">
                                        <span></span>
                                    </label>
                                </div>
                                
                                <div class="submit-section">
                                    <button class="btn btn-primary submit-btn">Save Changes</button>
                                </div>
                            </form>
                        </div>
                        </div>
</template>
