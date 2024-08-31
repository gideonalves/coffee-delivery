import { AddressFormContainer } from "./styles";
import { useFormContext } from "react-hook-form";
import { Input } from "../../../../components/Input";

import { searchCep } from "../../../../utils/searchCep";
import { useEffect, useState } from "react";

interface ErrorsType {
  errors: {
    [key: string]: {
      message: string;
    };
  };
}
interface AddressData {
  cep: string;
  localidade: string;
  bairro: string;
  logradouro: string;
  complement: string;
  uf: string; 
} 

export function AddressForm() {
  const [cep, setCep] = useState("");
  const [address, setAddress] = useState<AddressData | null>(null);

  const { register, formState } = useFormContext();

  const { errors } = formState as unknown as ErrorsType;

  async function handleCepChange() {
    let cepLoad = ''
    if(cep.length === 9){
      cepLoad = cep

      const { data } = await searchCep(cepLoad);
      if(data){ 

        return setAddress(data);
      
      }
    }
  }

  useEffect(() => {
    handleCepChange();

  }, [cep]);
  return (
    <AddressFormContainer>
      <Input
        value={cep}
        placeholder="CEP"
        type="text"
        className="cep"
        {...register("cep", { onChange: (e) => setCep(e.target.value) })} 
        // onChange={(e) => setCep(e.target.value)}
        error={errors.cep?.message}
      />
      <Input
        placeholder="Rua"
        value={address?.logradouro ?? ""}
        className="street"
        {...register("street")}
        error={errors.street?.message}
      />
      <Input
        type="number"
        placeholder="Número"
        {...register("number")}
        error={errors.number?.message}
      />
      <Input
        placeholder="Complemento"
        className="complement"
        {...register("complement")}
        error={errors.complement?.message}
        rightText="Opcional"
      />
      <Input
        placeholder="Bairro"
        value={address?.bairro ?? ""}
        {...register("district")}
        error={errors.district?.message}
      />
      <Input
        placeholder="Cidade"
        value={address?.localidade ?? ""}
        {...register("city")}
        error={errors.city?.message}
      />
      <Input placeholder="UF"
      value={address?.uf ?? ""} 
      {...register("uf")} 
      error={errors.uf?.message} 
      />
    </AddressFormContainer>
  );
}
