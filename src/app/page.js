import HomepageList from "@/Component/HomePage/HomePageList";
import { fetchGraphQl } from "./api/graphicql";
import { GET_POSTS_CATEGORYLIST_QUERY, GET_POSTS_LIST_QUERY } from "./api/query";

export default async function page() {

  let variable_category={
    "categoryGroupId": 1,
    "limit":50,
    "offset":0
  }
 let  variable_list={ "limit": 10, "offset": 0,"req": {
    "authorDetails": true},"categoryId":1}

  const [CategoryList,CategoryEntries]=await Promise.all([fetchGraphQl(GET_POSTS_CATEGORYLIST_QUERY,variable_category),fetchGraphQl(GET_POSTS_LIST_QUERY,variable_list)])
  return (
    <>
      <HomepageList CategoryList={CategoryList} CategoryEntries={CategoryEntries}/>
    </>
  );
}