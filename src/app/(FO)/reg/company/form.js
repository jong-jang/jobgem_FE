import { useRouter } from 'next/navigation';
import { useFormContext } from 'react-hook-form';
import { companyJoin } from '../action/RegAction';
import JoinButton from '../component/JoinButton';
import Section from '../component/Section';
import CompanyForm from '../component/form/CompanyForm';
import CompanyManagerForm from '../component/form/CompanyManagerForm';
import TermsAgreementForm from '../component/form/TermsAgreementForm';
import UserForm from '../component/form/UserForm';

export default function CompanyReg() {
  const { handleSubmit, reset } = useFormContext();
  const router = useRouter();

  const onSubmit = async (data) => {
    const result = await companyJoin(data);
    if(result == "회원가입 성공") {
      router.push('/login');
    }
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Section title="로그인 정보">
        <UserForm/>
      </Section>
      <Section title="기업회원 기본정보">
        <CompanyForm/>
      </Section>
      <Section title="기업 인사담당자 정보">
        <CompanyManagerForm/>
      </Section>
      <TermsAgreementForm/>
      <JoinButton/>
    </form>
  );
}