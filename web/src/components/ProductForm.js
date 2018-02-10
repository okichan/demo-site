import React from "react";
import Dropzone from "react-dropzone";
import Incrementer from "./Incrementer";

const categoryArray = [
	"Wa-Bocho",
	"Damascus",
	"Carbon Steel",
	"Inox Steel",
	"SP Inox",
	"Saya",
	"Hayate",
	"Stone",
	"Sharpening"
];

function ProductForm({ products, submitTitle, onSubmit, chosenImage, onDrop }) {
	return (
		<div className="row ">
			<h1 className="col-12 text-center p-3">New Product</h1>
			{products && (
				<form
					id="create-product"
					className="col-sm-7 mx-auto mb-5"
					onSubmit={event => {
						// Prevent old-school form submission
						event.preventDefault();

						const form = event.target;
						const elements = form.elements; // Allows looking up fields using their 'name' attributes

						// Get entered values from fields
						const category = elements.category.value;
						const code = elements.code.value;
						const title = elements.title.value;
						const price = elements.price.value;
						const stock = elements.stock.value;
						const image = chosenImage;

						// Pass this information along to the parent component
						onSubmit({ category, code, title, price, stock, image });
					}}
				>
					<div className="form-group">
						<label htmlFor="knifeCategory">Category</label>
						<select className="form-control col-sm-7 col-md-6 col-lg-4" name="category">
							{categoryArray.map((categoryArr, index) => {
								return <option key={`productCate${index}`}>{categoryArr}</option>;
							})}
						</select>
					</div>
					<div className="form-group">
						<label htmlFor="code">Code</label>
						<input
							type="text"
							className="form-control col-4 col-md-3"
							name="code"
							placeholder="101012"
							required
						/>
					</div>
					<div className="form-group">
						<label htmlFor="knifeName">Name</label>
						<input
							type="text"
							className="form-control"
							name="title"
							placeholder="300MM YANAGIBA HAYATE (RIGHT HAND USE)"
							required
						/>
					</div>

					<div className="form-group">
						<label htmlFor="price">RRP</label>
						<input
							type="number"
							className="form-control col-3 col-lg-2"
							name="price"
							placeholder="100"
							required
						/>
					</div>

               <Incrementer label="Amount" elementId="stock"/>

					<label htmlFor="image">Image</label>
					<Dropzone
						onDrop={onDrop}
						multiple={false}
						accept="image/*"
						// style={dropzoneStyle}
						className="form-control w-50 pointer pt-3 "
					>
						{chosenImage ? (
							<div>
								<img
									src={chosenImage}
									height="125"
									width="100%"
									style={{ opacity: "0.6" }}
									alt="product"
								/>
							</div>
						) : (
							<p className="text-muted text-center">
								Drop your file or click here to upload
							</p>
						)}
					</Dropzone>

					<button className="btn btn-primary btn-lg float-right  my-3">{submitTitle}</button>
					<button
						className="btn btn-light btn-lg mr-2 float-right  my-3"
						type="button"
						onClick={() => {
							window.history.back();
						}}
					>
						Cancel
					</button>
				</form>
			)}
		</div>
	);
}

export default ProductForm;
