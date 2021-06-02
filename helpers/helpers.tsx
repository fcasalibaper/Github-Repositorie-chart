import axios from "axios";

export const mergeArrayOfObject = (obj) => obj.reduce( (acc,el) => ({...acc, ...el}), []);

export const filteredByKey = (arr : Object[], accepted) => {
	let result = {};
	for (var type in arr) {
		if (accepted.indexOf(type) > -1)  {
			result[type] = arr[type];
		}
	}
	return result;
};

const decimals = (n : number) => {
  return n.toLocaleString("es-AR", {
    style: "currency",
    currency: "ARS",
    minimumFractionDigits: 2
  });
};

export const money = (n : number) => {
  var d = n % 1 === 0 ? 0 : 2;
  return decimals(n);
};



export const unique = (value, index, self) => {
  return self.indexOf(value) === index;
};

export const getData = async ( api ) => {
	const response = await axios.get(api)
    .then((res) => res.data)
    .then((data) => {
      return data;
    })
		.catch((e) => e?.status);
	return response;
};