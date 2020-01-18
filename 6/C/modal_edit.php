<?php
include "koneksi.php";
$id_product = $_GET['id_product'];
$modal = mysqli_query($koneksi, "SELECT * FROM tbl_product JOIN tbl_cashier ON tbl_product.id_cashier = tbl_cashier.id_cashier JOIN tbl_category ON tbl_product.id_category = tbl_category.id_category WHERE id_product='$id_product'");
while ($r = mysqli_fetch_array($modal)) {
    ?>
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">EDIT</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <form action="proses_edit.php" name="modal_popup" enctype="multipart/form-data" method="POST">
                    <input type="hidden" value="<?= $r['id_product'] ?>" name="id_product">
                    <div class="form-group">
                        <select class="form-control" name="id_cashier">
                            <option value="<?= $r['id_cashier'] ?>"><?= $r['name_cashier'] ?></option>
                            <option>-- Pilih Cashier --</option>
                            <?php
                                $list_cashier = mysqli_query($koneksi, "SELECT * FROM tbl_cashier");
                                while ($lc = mysqli_fetch_array($list_cashier)) {
                                    ?>
                                <option value="<?= $lc['id_cashier'] ?>"><?= $lc['name_cashier'] ?></option>
                            <?php
                                }
                                ?>
                        </select>
                    </div>
                    <div class="form-group">
                        <select class="form-control" name="id_category">
                            <option value="<?= $r['id_category'] ?>"><?= $r['name_category'] ?></option>
                            <option>-- Pilih Category --</option>
                            <?php
                                $list_category = mysqli_query($koneksi, "SELECT * FROM tbl_category");
                                while ($lc = mysqli_fetch_array($list_category)) {
                                    ?>
                                <option value="<?= $lc['id_category'] ?>"><?= $lc['name_category'] ?></option>
                            <?php
                                }
                                ?>
                        </select>
                    </div>
                    <div class="form-group">
                        <input type="text" class="form-control" name="name_product" value="<?= $r['name_product'] ?>" />
                    </div>
                    <div class="form-group">
                        <input type="text" class="form-control" name="price_product" value="<?= $r['price_product'] ?>" />
                    </div>
                    <div class="modal-footer">
                        <button type="submit" class="btn btn-info">EDIT</button>
                    </div>
                </form>
            </div>
        <?php } ?>
        </div>
    </div>