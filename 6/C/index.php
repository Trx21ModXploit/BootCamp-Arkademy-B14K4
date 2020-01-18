<!DOCTYPE html>
<html lang="en">

<head>
    <!-- Required meta tags -->
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/sweetalert2@7.12.15/dist/sweetalert2.min.css" />
    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="css/bootstrap.min.css" />
    <link rel="stylesheet" href="css/style.css" />
    <link href="css/bootstrap.css" rel="stylesheet">
    <script src="js/jquery.min.js"></script>
    <script src="js/bootstrap.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/sweetalert2@7.12.15/dist/sweetalert2.all.min.js"></script>
    <title>ARK | CS</title>
</head>

<body>
    <div class="container" id="shadow">
        <nav class="navbar navbar-expand-lg navbar-link bg-link">
            <img class="arkademy-logo arkademy-size" src="img/arkademy.png" alt="" />
            <div class="align-middle pl-2">
                <b style="font-size: 18px">ARKADEMY COFFEE SHOP</b>
            </div>
            <div style="padding-left: 670px">
                <button type="button" class="btn btn-info" data-toggle="modal" data-target="#add">
                    ADD
                </button>
            </div>
        </nav>
    </div>
    <div class="container pt-5">
        <div class="card" id="shadow">
            <div class="card-body">
                <table class="table" style="text-align: center;">
                    <thead>
                        <tr class="table-info">
                            <th scope="col">No</th>
                            <th scope="col">Cashier</th>
                            <th scope="col">Product</th>
                            <th scope="col">Category</th>
                            <th scope="col">Price</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <?php
                        include "koneksi.php";
                        $no = 0;
                        $modal = mysqli_query($koneksi, "SELECT * FROM tbl_product JOIN tbl_cashier ON tbl_product.id_cashier = tbl_cashier.id_cashier JOIN tbl_category ON tbl_product.id_category = tbl_category.id_category ");
                        while ($r = mysqli_fetch_array($modal)) {
                            $no++;
                            ?>
                            <tr>
                                <th scope="row"><?= $no ?></th>
                                <td><?= $r['name_cashier'] ?></td>
                                <td><?= $r['name_product'] ?></td>
                                <td><?= $r['name_category'] ?></td>
                                <td>Rp. <?= $r['price_product'] ?></td>
                                <td>
                                    <a href="#" style="color: green" class='open_modal' id='<?= $r['id_product']; ?>'>Edit</a>
                                    |
                                    <a href="#" onclick="confirm_modal('proses_delete.php?&id_product=<?= $r['id_product']; ?>');" style="color: red">Hapus</a>
                                </td>
                            </tr>
                        <?php } ?>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
    <!-- Modal Add -->
    <div class="modal fade" id="add" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">ADD</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <form action="proses_save.php" name="modal_popup" enctype="multipart/form-data" method="POST">
                        <div class="form-group">
                            <select class="form-control" name="id_cashier">
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
                            <input type="text" class="form-control" name="name_product" placeholder="Tea" />
                        </div>
                        <div class="form-group">
                            <input type="text" class="form-control" name="price_product" placeholder="Rp. 10.000" />
                        </div>
                        <div class="modal-footer">
                            <button type="submit" class="btn btn-info">ADD</button>
                        </div>
                    </form>
                </div>

            </div>
        </div>
    </div>

    <!-- Modal Edit -->
    <div id="ModalEdit" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
    </div>

    <!-- Modal Hapus -->
    <div class="modal fade" id="modal_delete" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                </div>
                <div class="modal-body">
                    <h5 class="modal-title" style="text-align:center;">Apakah anda yakin ingin menghapus data ini ?</h5>
                </div>
                <div class="modal-footer" style="margin:0px; border-top:0px; text-align:center;">
                    <a href="#" class="btn btn-danger" id="delete_link" onclick="klik()">Delete</a>
                </div>
            </div>
        </div>
    </div>

    <!-- Javascript untuk popup modal Edit-->
    <script type="text/javascript">
        $(document).ready(function() {
            $(".open_modal").click(function(e) {
                var m = $(this).attr("id");
                $.ajax({
                    url: "modal_edit.php",
                    type: "GET",
                    data: {
                        id_product: m,
                    },
                    success: function(ajaxData) {
                        $("#ModalEdit").html(ajaxData);
                        $("#ModalEdit").modal('show', {
                            backdrop: 'true'
                        });
                    }
                });
            });
        });
    </script>
    <!-- Javascript untuk popup modal Delete-->
    <script type="text/javascript">
        function confirm_modal(delete_url) {
            $('#modal_delete').modal('show', {
                backdrop: 'static'
            });
            document.getElementById('delete_link').setAttribute('href', delete_url);
        }
    </script>
    <script>
        function klik() {
            swal('Berhasil', 'Data Berhasil Dihapus!', 'success');
        }
    </script>
</body>

</html>