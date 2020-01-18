<?php
include "koneksi.php";
$name_product = $_POST['name_product'];
$price_product = $_POST['price_product'];
$id_category = $_POST['id_category'];
$id_cashier = $_POST['id_cashier'];
mysqli_query($koneksi, "INSERT INTO tbl_product (name_product,price_product,id_category,id_cashier) VALUES ('$name_product','$price_product','$id_category','$id_cashier')");
header('location:index.php');
