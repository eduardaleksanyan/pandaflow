import React, { useCallback, useMemo, useState } from "react";
import { useGetAnimalsQuery } from "../../api/Animals";
import DataGridCustom from "../../components/data-grid/DataGridCustom";
import Columns from "../../components/animals/Columns";
import AddAnimals from "../../components/animals/AddAnimals";
import DeleteAnimals from "../../components/animals/DeleteAnimals";
import MainContainer from "../../components/container/MainContainer";

export default function Animals() {
  const [deleteId, setDeleteId] = useState<string | null>(null);
  const [openDeleteModal, setOpenDeleteModal] = useState(false);

  const handleDelete = useCallback((id: string) => {
    if (id) {
      setOpenDeleteModal(true);
      setDeleteId(id);
    }
  }, []);

  const { data } = useGetAnimalsQuery();

  const rows = useMemo(() => data ?? [], [data]);
  const columns = useMemo(
    () => Columns({ handleDelete }),
    [handleDelete],
  );

  return (
    <MainContainer title={"Animals"}>
      <AddAnimals />
      <DataGridCustom rows={rows} columns={columns} />
      {openDeleteModal && deleteId && (
        <DeleteAnimals
          open={openDeleteModal}
          handleClose={() => setOpenDeleteModal(false)}
          id={deleteId}
        />
      )}
    </MainContainer>
  );
}
